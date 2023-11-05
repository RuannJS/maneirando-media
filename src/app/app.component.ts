import { Component, OnInit } from '@angular/core';
import { Influencer } from './models/influencer';
import { SocialMedia } from './models/social-media';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  // slider

  slider: string[] = [
    '../assets/slider/aranha.png',
    '../assets/slider/chave.png',
    '../assets/slider/lacasa.png',
    '../assets/slider/naruto.png',
    '../assets/slider/zodiaco.png',
  ];

  sliderCount: number = 0;
  sliderInterval: number = 5000;

  nextSlide() {
    this.sliderCount++;

    if (this.sliderCount >= this.slider.length) {
      this.sliderCount = 0;
    }
  }

  previousSlide() {
    this.sliderCount--;

    if (this.sliderCount < 0) {
      this.sliderCount = this.slider.length - 1;
    }
  }

  // youtube slider

  youtubeSlider: string[] = [
    '../assets/youtubeSlider/biggest.png',
    '../assets/youtubeSlider/monthly.png',
    '../assets/youtubeSlider/views.png',
  ];

  youtubeCount: number = 0;
  youtubeInterval: number = 3000;

  // school slider

  schoolSlider: string[] = [
    '../assets/images/school/escola1.png',
    '../assets/images/school/escola2.png',
    '../assets/images/school/escola3.png',
    '../assets/images/school/escola4.png',
    '../assets/images/school/escola5.png',
  ];

  schoolCount: number = 0;
  schoolInterval: number = 2000;

  // interview slider

  interviewSlider: string[] = [
    '../assets/images/interviews/interview1.png',
    '../assets/images/interviews/interview2.png',
  ];

  interviewCount: number = 0;
  interviewInterval: number = 5000;

  // influencer slider

  influencers: Influencer[] = [
    {
      name: 'robin hood gamer',
      image: '../assets/images/influencers/robinhood.png',
    },
    {
      name: 'beto gamer & hey davi',
      image: '../assets/images/influencers/beto&davi.png',
    },
    {
      name: 'natan por aí',
      image: '../assets/images/influencers/natan.png',
    },
    {
      name: 'biel valadares & lucas guedes',
      image: '../assets/images/influencers/biel&guedes.png',
    },
    {
      name: 'wilou & watson',
      image: '../assets/images/influencers/wilou&watson.png',
    },
    {
      name: 'manolo rey & sérgio cantú, dubladores do homem-aranha',
      image: '../assets/images/influencers/rey&cantu.png',
    },
  ];

  influencerCount: number = 0;
  influencerInterval: number = 3000;

  ngOnInit(): void {
    setInterval(() => {
      if (this.sliderCount >= this.slider.length - 1) {
        this.sliderCount = 0;
      }
      this.sliderCount++;
    }, this.sliderInterval);

    setInterval(() => {
      this.schoolCount++;
      if (this.schoolCount > this.schoolSlider.length - 1) {
        this.schoolCount = 0;
      }
    }, this.schoolInterval);

    setInterval(() => {
      this.youtubeCount++;
      if (this.youtubeCount >= this.youtubeSlider.length - 1) {
        this.youtubeCount = 0;
      }
    }, this.youtubeInterval);

    setInterval(() => {
      this.interviewCount++;
      if (this.interviewCount > this.interviewSlider.length - 1) {
        this.interviewCount = 0;
      }
    }, this.interviewInterval);

    setInterval(() => {
      this.influencerCount++;
      if (this.influencerCount > this.influencers.length - 1) {
        this.influencerCount = 0;
      }
    }, this.influencerInterval);
  }
}
