"use strict";
// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_list = ["kainat", "Maham", "Marium", "ayesha"];
//  for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t`)
//  }
let new_guest = "Rubab";
let absent_guest = "kainat";
guest_list[0] = new_guest;
//  for (let i=0; i<guest_list.length; i++){
//      console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`)
//   }
// console.log(`Dear Miss ${absent_guest} is not comming to my birthday party`);
// console.log(`good news!we are organizing big dinner table so we are inviting 3 more guests`);
//3 guest add here
guest_list.unshift('kiran');
guest_list.splice(2, 0, 'farhana');
guest_list.push('shumaila');
//6 guest array
//for (let i=0; i<guest_list.length; i++){
//       console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`)
//    }
//sorry message for not inviting guest
//    console.log(`\n we are sorry to announce that we are inviting only two people as we dont have much space`);
//we remove here guest
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`sorry miss. ${remove_guest},you are not invited to the birthday dinner`);
}
//two remaining guest who are still
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nyou are still invited to my birthday party\n\n\t\t thank you\t\t\n\n`)
//  }
//remove all guest from my guest arry
guest_list.splice(0, 2);
//  console.log(guest_list);
//  exercise 19
// print a message indicating the number of people you are inviting to dinner
console.log(`total number of guest are:${guest_list.length}`);
