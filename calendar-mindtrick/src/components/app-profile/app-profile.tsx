import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'mes-calendar',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  @State() state = false;
  @Prop() name: string;


  render() {
    return [
    <div>JUlian</div>
    ];
  }
}
