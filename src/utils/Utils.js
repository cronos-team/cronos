const { MessageEmbed } = require("discord.js");

module.exports = class Util {
  constructor(client) {
    this.client = client;
  }

  static embed() {
    return new MessageEmbed();
  }

  static formatPerms(perm) {
    return perm
      .toLowerCase()
      .replace(/(^|"|_)(\S)/g, (string) => string.toUpperCase())
      .replace(/_/g, " ")
      .replace(/To/g, "to")
      .replace(/And/g, "and")
      .replace(/Guild/g, "Server")
      .replace(/Tts/g, "Text-to-Speech")
      .replace(/Use Vad/g, "Use Voice Acitvity");
  }

  static formatArray(array, type = "conjunction") {
    return new Intl.ListFormat("en-GB", { style: "short", type: type }).format(
      array
    );
  }

  static removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  static readTime(time) {
    let s = time % 60;
    time -= s;
    let m = (time / 60) % 60;
    time -= m * 60;
    let h = (time / 3600) % 24;

    if (m <= 0) {
      return `${s} seconds`;
    } else if (h <= 0) {
      return `${m} min`;
    } else {
      return `${h}h`;
    }
  }
};
