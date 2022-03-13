export enum EResponses {
  ERROR = "ERROR",
  BODY_NOT_JSON = "BODY_NOT_JSON",
  NO_BODY_DATA = "NO_BODY_DATA",
  NO_ACCOUNT_ID = "NO_ACCOUNT_ID",
  NO_USERNAME = "NO_USERNAME",
  NO_PASSWORD = "NO_PASSWORD",
  NO_FOLLOWING = "NO_FOLLOWING",
  NO_COMMAND = "NO_COMMAND",
  NO_SYMBOL = "NO_SYMBOL",
  NO_BOX_TO_DELETE = "NO_BOX_TO_DELETE",
  USER_NO_ACCESS = "USER_NO_ACCESS",
  SOMEBODY_ELSE_DELETED_DATABASE = "SOMEBODY ELSE DELETED THE DATABASE while you've tried to use it. It's time to upgrade your database",
  UNKNOWN_COMMAND = "UNKNOWN_COMMAND",
  OK = "OK",
  BAD = "BAD",
  UNAUTHENTICATED = "UNAUTHENTICATED",
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_DEACTIVATED = "USER_DEACTIVATED",
  USER_NOT_EXISTS = "USER_NOT_EXISTS",
  BOX_CREATOR_RIGHTS_MISSING = "BOX_CREATOR_RIGHTS_MISSING",
  WRONG_PASSWORD = "WRONG_PASSWORD",
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS"
}

export interface IValidation {
  result: boolean;
  accountId?: string;
  username?: string;
  password?: string;
  following?: string;
  command?: string;
  data?: any;
}

export interface IBoxRow {
  createdAt: Date;
  box: any;
  retrieved: string[];
}

export enum ECommands {
  GET_PENDING_BOXES = "GET_PENDING_BOXES",
  GET_MY_BOXES = "GET_MY_BOXES",
  CREATE_BOX = "CREATE_BOX",
  BOX_EVENT_TOUCH = "BOX_EVENT_TOUCH",
  BOX_EVENT_BREAKOUT = "BOX_EVENT_BREAKOUT",
  BOX_EVENT_ENTERED_TRADE = "BOX_EVENT_ENTERED_TRADE",
  FORCE_TOUCH = "FORCE_TOUCH",
  FORCE_BREAKOUT = "FORCE_BREAKOUT",
  SEND_MESSAGE_TELEGRAM = "SEND_MESSAGE_TELEGRAM",
  DELETE_BOX = "DELETE_BOX",
  LOGIN = "LOGIN",
  RESET_PASSWORD = "RESET_PASSWORD",
}


export enum ETelegramCommands {
  help = "help",
  join = "join",
  leave = "leave",
  telegramid = "telegramid",
}

export enum ETelegramCommandExamples {
  telegramCommandExample_join = "join:example@youremail.com:password",
  telegramCommandExample_leave = "leave",
  telegramCommandExample_telegramid = "telegramid",
}

export enum EAppStates {
  PRODUCTION = "production",
  STAGING = "staging",
  DEVELOPMENT = "development",
}