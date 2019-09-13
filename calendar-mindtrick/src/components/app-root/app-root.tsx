import { Component, h } from '@stencil/core';
import moment from 'moment'
import { Prop } from '@stencil/core';
import { State } from '@stencil/core';
import { Listen } from '@stencil/core';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';



@Component({
  tag: 'calendar-mindtric',
  styleUrl: 'app-root.css'
})

export class AppRoot    {

  constructor() {
    this.state = {
      year: moment().year(),
      month: moment().month()+1,
      day: moment().days(),
      viewRankOfYear: false
    }
    this.anio="AÑO",
    this.dia="DIA",
    this.mes="MES"
  }

  @State() dia : string;
  @State() mes : string;
  @State() anio : string;


  @State() aniotate=false;
  @State() mesState=false;
  @State() diaState=false;



  @Prop() name: string;
  @State() state: any;

  handleDateChange = (e) => {
    this.state({date: e.target.value}, ()=>{
      console.log(moment(this.state.date).startOf('week').toISOString()); //week start date
      console.log(moment(this.state.date).endOf('week').toISOString()) //week end date
    })
  }


  connectedCallback() {
   
  }
  
changedMes=(e)=>{
 if(this.aniotate){
  this.mes="";
  this.mesState=true;
 }

}

changedAnio=(e)=>{
  this.anio="";
  this.aniotate=true;
}

changedDia=(e)=>{
  if(this.mesState)
  this.dia="";

}
  render() {

    const test = this.aniotate;
    let testUserAgent;

    if(test){
      testUserAgent= <div>Holaaa</div>

    }

    return (
    <div class="calendar-formart-global">
      <div ></div>
      <div class="calendar-formart">
        
        <input   placeholder={this.anio} onClick={this.changedAnio}> </input>
        /<input placeholder={this.mes} onClick={this.changedMes} ></input>/
        <input placeholder={this.dia} onClick={this.changedDia} ></input>
      </div>
        {testUserAgent}

     </div>
     
    );
  }
}
