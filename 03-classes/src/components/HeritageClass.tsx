import React from 'react';
import { UserAccount } from './Class01';

class CharAccount extends UserAccount {
  nickname: string;
  level: number;

  constructor(name:string, age:number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }
}

function HeritageClass() {

  const SkyWalker = new CharAccount("Andre", 30, "SkyWalker", 100);

  console.log(SkyWalker);

  return (
    <div className="class02">
      <p>
        { SkyWalker.nickname + " at level: " + SkyWalker.level }
      </p>
    </div>
  )
}

export default HeritageClass;
