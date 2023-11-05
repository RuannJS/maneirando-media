import { Component, OnInit, OnDestroy } from '@angular/core';
import { Influencer } from './models/influencer';
import { SocialMedia } from './models/social-media';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  clearSliderInterval!: any;
  clearYoutubeInterval!: any;
  clearSchoolInterval!: any;
  clearInterviewInterval!: any;
  clearInfluencerInterval!: any;

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
    '../assets/images/school/school1.jpg',
    '../assets/images/school/school2.jpg',
    '../assets/images/school/school3.jpg',
    '../assets/images/school/school4.jpg',
    '../assets/images/school/school5.jpg',
  ];

  schoolCount: number = 0;
  schoolInterval: number = 2000;

  // interview slider

  interviewSlider: string[] = [
    '../assets/images/interviews/interview1.png',
    '../assets/images/interviews/interview2.png',
    '../assets/images/interviews/interview3.jpg',
    '../assets/images/interviews/interview4.png',
  ];

  interviewCount: number = 0;
  interviewInterval: number = 5000;

  // influencer slider

  influencers: Influencer[] = [
    {
      name: 'athos',
      image: '../assets/images/influencers/athos.jpg',
    },
    {
      name: 'biel valadares e lucas guedes',
      image: '../assets/images/influencers/valadares.jpg',
    },
    {
      name: 'bruno vlogs e henrique memes',
      image: '../assets/images/influencers/bruno&henrique.jpg',
    },
    {
      name: 'chapoh e duduzito',
      image: '../assets/images/influencers/chapo&duduzito.jpg',
    },
    {
      name: 'coelho e bru',
      image: '../assets/images/influencers/coelho&bru.jpg',
    },
    {
      name: 'dando trela e jhonny',
      image: '../assets/images/influencers/trela&jhony.jpg',
    },
    {
      name: 'ei nerd e a gente faz agora',
      image: '../assets/images/influencers/nerd&agora.jpg',
    },
    {
      name: 'família arqueira',
      image: '../assets/images/influencers/familiaarqueira.jpg',
    },
    {
      name: 'irmãos lemos',
      image: '../assets/images/influencers/irmaoslemos.jpg',
    },
    {
      name: 'lucrazy e retarda marques',
      image: '../assets/images/influencers/lucrazy&retarda.jpg',
    },
    {
      name: 'mamute congelado',
      image: '../assets/images/influencers/mamutecongelado.jpg',
    },
    {
      name: 'manolo e sergio cantú',
      image: '../assets/images/influencers/manolo&cantu.jpg',
    },
    {
      name: 'mundo geek',
      image: '../assets/images/influencers/mundogeek.jpg',
    },
    {
      name: 'natan por aí',
      image: '../assets/images/influencers/natan.jpg',
    },
    {
      name: 'noylan e mellu',
      image: '../assets/images/influencers/noylan&mellu.jpg',
    },
    {
      name: 'o que não dizer',
      image: '../assets/images/influencers/naodizer.jpg',
    },
    {
      name: 'raphael rossato e helena palomanes',
      image: '../assets/images/influencers/raphael&helena.jpg',
    },
    {
      name: 'robin hood gamer',
      image: '../assets/images/influencers/robinhood.jpg',
    },
    {
      name: 'o que não dizer',
      image: '../assets/images/influencers/naodizer.jpg',
    },
    {
      name: 'voice makers',
      image: '../assets/images/influencers/voicemakers.jpg',
    },
    {
      name: 'wiris',
      image: '../assets/images/influencers/wiris.jpg',
    },
    {
      name: 'wirley contaifer e cadu paschoal',
      image: '../assets/images/influencers/wirley&cadu.jpg',
    },
  ];

  influencerCount: number = 0;
  influencerInterval: number = 2000;

  ngOnInit(): void {
    this.clearSliderInterval = setInterval(() => {
      if (this.sliderCount >= this.slider.length - 1) {
        this.sliderCount = 0;
      }
      this.sliderCount++;
    }, this.sliderInterval);

    this.clearYoutubeInterval = setInterval(() => {
      this.youtubeCount++;
      if (this.youtubeCount >= this.youtubeSlider.length - 1) {
        this.youtubeCount = 0;
      }
    }, this.youtubeInterval);

    this.clearInterviewInterval = setInterval(() => {
      this.interviewCount++;
      if (this.interviewCount > this.interviewSlider.length - 1) {
        this.interviewCount = 0;
      }
    }, this.interviewInterval);

    this.clearInfluencerInterval = setInterval(() => {
      this.influencerCount++;
      if (this.influencerCount > this.influencers.length - 1) {
        this.influencerCount = 0;
      }
    }, this.influencerInterval);

    this.clearSchoolInterval = setInterval(() => {
      this.schoolCount++;
      if (this.schoolCount > this.schoolSlider.length - 1) {
        this.schoolCount = 0;
      }
    }, this.schoolInterval);
  }

  ngOnDestroy(): void {
    clearInterval(this.clearSchoolInterval);
    clearInterval(this.clearInfluencerInterval);
    clearInterval(this.clearSliderInterval);
    clearInterval(this.clearYoutubeInterval);
    clearInterval(this.clearInterviewInterval);
  }
}
