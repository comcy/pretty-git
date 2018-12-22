#!/usr/bin/env node
import { Argument } from "./cli/arguments";
import {
  consoleStyle
} from './helpers';
import { Cli } from './cli/cli';

export class Main {
  
  constructor() {  }

  public init() {
    console.log(consoleStyle.textFgRed, consoleStyle.asciiLogo);
  }

}

let cli = new Cli();
let argument = new Argument(cli.getCliArgs());

let main = new Main();
main.init();
