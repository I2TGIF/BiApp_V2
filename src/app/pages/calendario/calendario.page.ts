import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController, Platform } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
calendars = [];
  event= {
    title:'',
    desc:'',
    startTime:'',
    endTime:'',
    allDay:false
    
    };
    
      minDate= new Date().toISOString();
    
      eventSource = [];
      viewTitle: string;
     
      calendar = {
        mode: 'month',
        locale: 'en-ES',
        currentDate: new Date(),
      };
    
      ViewTitle=''; 
    
      @ViewChild (CalendarComponent, null) myCal:CalendarComponent;
      constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID)private locale: string,
      public router: Router, 
      private calendar2: Calendar,
      private plt: Platform) {
        this.plt.ready().then(()=>{
          this.calendar2.listCalendars().then(data=>{
            this.calendars = data;
          });
        });
      }
    
      addEvent2(cal){
        let date=new Date();
        let options={calendarId:cal.id, calendarName: cal.name, firstReminderMinutes:15};
        this.calendar2.createEventInteractivelyWithOptions('Mi nuevo evento Biapp', 'Lugar ', 'Notas', date, date, options).then(res => {
          }, err => {
            console.log('err: ', err);
          });
        }

      ngOnInit(){
     this.resetEvent();
    
      }
      resetEvent(){
        this.event= {
          title:'',
          desc:'',
          startTime: new Date().toISOString(),
          endTime: new Date().toISOString(),
          allDay:false
        };
      }
    
    
    
      addEvent(){
        let eventCopy= {
          title: this.event.title,
          startTime: new Date(this.event.startTime),
          endTime:new Date(this.event.endTime),
          allDay:this.event.allDay,
          desc:this.event.desc
        }
       if (eventCopy.allDay){
         let start= eventCopy.startTime;
       let end= eventCopy.endTime;
       
         eventCopy.startTime= new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
         eventCopy.endTime= new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()+1));
       
       
       
       }
       this.eventSource.push(eventCopy)
       this.myCal.loadEvents();
       this.resetEvent();
       }
    
    changeMode(mode){
    
      this.calendar.mode =mode;
    }
    

    today(){
      this.calendar.currentDate = new Date();
    }
      
     async onEventSelected(event){
    let start = formatDate (event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'Desde: ' + start + '<br><br> Hasta: ' +end,
      buttons: ['Sí']
    });
    alert.present();
    
    }
    
     onViewTitleChanged(title){
     this.viewTitle= title;
    }
    onTimeSelected(ev){
    let selected= new Date(ev.selectedTime);
    this.event.startTime= selected.toISOString();
    selected.setHours(selected.getHours()+1);
    this.event.endTime= (selected.toISOString());
    }
     
     
    }