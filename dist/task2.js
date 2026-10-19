"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatar = getAvatar;
const defaultAvatar = "/img/no-avatar.png";
function getAvatar(user) {
    if (user.avatar) {
        return user.avatar;
    }
    return defaultAvatar;
}
