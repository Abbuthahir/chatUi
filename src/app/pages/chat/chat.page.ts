import { Component, OnInit } from '@angular/core';

enum Creator {
  Me = 0,
  Bot = 1,
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      text: 'What is Javascript?',
      from: Creator.Me,
    },
    {
      text: 'Javascript is a scripting language that is used to create interactive webpages and applications. It is an object-oriented programming language that can be used to create dynamic, responsive webpages and applications. It can be used to create games, 3D graphics, and even artificial intelligence within the browser.',
      from: Creator.Bot,
    },
    {
      text: 'What is Javascript?',
      from: Creator.Me,
    },
    {
      text: 'Javascript is a scripting language that is used to create interactive webpages and applications. It is an object-oriented programming language that can be used to create dynamic, responsive webpages and applications. It can be used to create games, 3D graphics, and even artificial intelligence within the browser.',
      from: Creator.Bot,
    },
    {
      text: 'What is Javascript?',
      from: Creator.Me,
    },
    {
      text: 'Javascript is a scripting language that is used to create interactive webpages and applications. It is an object-oriented programming language that can be used to create dynamic, responsive webpages and applications. It can be used to create games, 3D graphics, and even artificial intelligence within the browser.',
      from: Creator.Bot,
    },
    {
      text: 'What is Javascript?',
      from: Creator.Me,
    },
    {
      text: 'Javascript is a scripting language that is used to create interactive webpages and applications. It is an object-oriented programming language that can be used to create dynamic, responsive webpages and applications. It can be used to create games, 3D graphics, and even artificial intelligence within the browser.',
      from: Creator.Bot,
    },
  ];
  constructor() { }

  ngOnInit() { }

  submit() { }

}
