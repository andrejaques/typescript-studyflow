import React from 'react'

export class UserAccount {
  name: string;
  age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}

function Class01() {

  const Andre = new UserAccount("Andre Jaques Batista", 30);

  console.log(Andre);

  return (
    <div className="class01">
      <p>
        { Andre.name }
      </p>
    </div>
  )
}

export default Class01
