import { Component } from '@angular/core';
import { SocialMedia } from './models/social-media';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mediaLinks: SocialMedia[] = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@Maneirando',
      icon: '../assets/mediaIcons/youtube.png',
    },
    {
      name: 'Shorts',
      link: 'https://www.youtube.com/@Maneirando/shorts',
      icon: '../assets/mediaIcons/shorts.png',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/netoeguizao/',
      icon: '../assets/mediaIcons/instagram.png',
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@netoeguizao',
      icon: '../assets/mediaIcons/tiktok.png',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/netoeguizao/',
      icon: '../assets/mediaIcons/facebook.png',
    },
    {
      name: 'Kwai',
      link: 'https://www.kwai.com/@netoeguizao',
      icon: '../assets/mediaIcons/kwai.png',
    },
    {
      name: 'Plutotv',
      link: 'https://pluto.tv/pt/search/details/movies/parodias-series-animes-y-filmes-famosos-br-2019-1-1',
      icon: '../assets/mediaIcons/plutotv.png',
    },
  ];

  influencers: string[] = [
    '../assets/images/influencers/1.png',
    '../assets/images/influencers/2.png',
    '../assets/images/influencers/3.png',
    '../assets/images/influencers/4.png',
    '../assets/images/influencers/5.png',
    '../assets/images/influencers/6.png',
    '../assets/images/influencers/7.png',
    '../assets/images/influencers/8.png',
    '../assets/images/influencers/9.png',
  ];

  // slider

  slider: string[] = [
    '../assets/slider/aranha.png',
    '../assets/slider/chave.png',
    '../assets/slider/lacasa.png',
    '../assets/slider/naruto.png',
    '../assets/slider/zodiaco.png',
  ];

  sliderCount: number = 0;

  nextSlide() {
    this.sliderCount++;

    if (this.sliderCount > 4) {
      this.sliderCount = 0;
    }

    console.log(this.sliderCount);
  }

  previousSlide() {
    this.sliderCount--;

    if (this.sliderCount < 0) {
      this.sliderCount = 4;
    }
    console.log(this.sliderCount);
  }
}
