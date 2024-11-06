import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';

interface SalesmanLocation {
  latitude: number;
  longitude: number;
  timestamp: Date;
}

@Component({
  selector: 'app-salesman-tracker',
  templateUrl: './salesman-tracker.page.html',
  styleUrls: ['./salesman-tracker.page.scss'],
})
export class SalesmanTrackerPage {
  isPunchedIn = false;
  locations: SalesmanLocation[] = [];
  trackingInterval: any;

  constructor(
    private geolocation: Geolocation,
    private toastController: ToastController
  ) {}

  async punchIn() {
    this.isPunchedIn = true;
    await this.showLocalNotification(
      'Salesman Tracker',
      'Tracking salesman location...'
    );
    this.startLocationTracking();
  }
  async punchOut() {
    this.isPunchedIn = false;
    clearInterval(this.trackingInterval);
    await this.showLocalNotification('Salesman Tracker', 'Tracking stopped');
    await LocalNotifications.cancel({ notifications: [{ id: 1 }] });
  }

  startLocationTracking() {
    this.trackingInterval = setInterval(() => {
      this.getLocation();
    }, 5000);
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((position) => {
      const location: SalesmanLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: new Date(),
      };
      this.locations.push(location);
    });
  }

  async showLocalNotification(title: string, body: string) {
    await LocalNotifications.schedule({
      notifications: [
        {
          title,
          body,
          id: 1,
          sound: undefined,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          ongoing: true,
        },
      ],
    });
  }
}
