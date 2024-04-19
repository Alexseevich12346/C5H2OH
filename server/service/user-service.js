const userModel = require("../models/user-model");
const mailService = require("./mail-service");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
import TokenService from "./token-service";
class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Erroe("Пользователь уже зарегестрирован");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationMail(email, activationLink);
    const tokens = TokenService.generationTokens(user);
  }
}
module.exports = new UserService();
