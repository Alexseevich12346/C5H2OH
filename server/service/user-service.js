const mailService = require("./mail-service");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const userModel = require("../models/user-model");
class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error("Пользователь уже зарегестрирован");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    for (let i = 0; i < 2; i++) {
      await mailService.sendActivationMail(
        email,
        `${process.env.API_URL}/api/activate/${activationLink}`
      );
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto, //перепись переменной
    };
  }
  async activate(activationLink) {
    const user = await userModel.findOne({ activationLink });
    if (!user) {
      throw new Error("Некорректная ссылка");
    }
    user.isActivated = true;
    await user.save();
  }
  async login(email, password) {
    const user = await userModel.findOne({ emali });
    if (!user) {
      throw new Error("User not found");
    }
    const isPassEqualss = await bcrypt.compare(password, user.password);
    if (!isPassEqualss) {
      throw new Error("Неверный пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto, //перепись переменной
    };
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
}
module.exports = new UserService();
