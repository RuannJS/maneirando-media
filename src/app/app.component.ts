import { Component, OnInit } from '@angular/core';
import { Influencer } from './models/influencer';
import { SocialMedia } from './models/social-media';
import { Interview } from './models/interview';
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

  // sliders

  swapInterval: number = 7500;

  // MAIN
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

  // school slider

  schoolSlider: string[] = [
    '../assets/images/school/school1.png',
    '../assets/images/school/school2.png',
    '../assets/images/school/school3.png',
    '../assets/images/school/school4.png',
    '../assets/images/school/school5.png',
  ];

  schoolCount: number = 0;

  nextSchoolSlide() {
    this.schoolCount++;

    if (this.schoolCount >= this.schoolSlider.length) {
      this.schoolCount = 0;
    }
  }

  previousSchoolSlide() {
    this.schoolCount--;

    if (this.schoolCount < 0) {
      this.schoolCount = this.schoolSlider.length - 1;
    }
  }

  // interview slider

  interviews: Interview[] = [
    { id: 0, image: '../assets/images/interviews/interview1.png' },
    { id: 1, image: '../assets/images/interviews/interview2.png' },
    { id: 2, image: '../assets/images/interviews/interview3.jpg' },
    { id: 3, image: '../assets/images/interviews/interview4.png' },
    { id: 4, image: '../assets/images/interviews/interview5.png' },
  ];

  activeInterview: number = 0;

  activeSlide(id: number): void {
    this.activeInterview = id;
  }

  // influencer slider

  influencers: Influencer[] = [
    {
      name: 'athos',
      image: '../assets/images/influencers/athos.png',
      link: 'https://www.youtube.com/@Athosgamer',
    },
    {
      name: 'biel valadares e lucas guedes',
      image: '../assets/images/influencers/valadares.png',
      link: 'https://www.youtube.com/@BielValadares',
    },
    {
      name: 'bruno vlogs e henrique Nemes',
      image: '../assets/images/influencers/bruno&henrique.png',
      link: 'https://www.youtube.com/@HenriqueNemes',
    },
    {
      name: 'chapoh e duduzito',
      image: '../assets/images/influencers/chapo&duduzito.png',
      link: 'https://www.youtube.com/@duduzito_sz',
    },
    {
      name: 'coelho e bru',
      image: '../assets/images/influencers/coelho&bru.png',
      link: 'https://www.youtube.com/@mateiformiga',
    },
    {
      name: 'dando trela e jhonny',
      image: '../assets/images/influencers/trela&jhony.png',
      link: 'https://www.youtube.com/@MeunomeeJohnny',
    },
    {
      name: 'ei nerd e a gente faz agora',
      image: '../assets/images/influencers/nerd&agora.png',
      link: 'https://www.youtube.com/@einerdtv',
    },
    {
      name: 'família arqueira',
      image: '../assets/images/influencers/familiaarqueira.png',
      link: 'https://www.youtube.com/@FamiliaArqueira',
    },
    {
      name: 'irmãos lemos',
      image: '../assets/images/influencers/irmaoslemos.png',
      link: 'https://www.youtube.com/@IrmaosLemos',
    },
    {
      name: 'lucrazy e retarda marques',
      image: '../assets/images/influencers/lucrazy&retarda.png',
      link: 'https://www.youtube.com/@LuCr4zy7',
    },
    {
      name: 'mamute congelado',
      image: '../assets/images/influencers/mamutecongelado.png',
      link: 'https://www.youtube.com/@MamuteCongelado',
    },
    {
      name: 'manolo e sergio cantú',
      image: '../assets/images/influencers/manolo&cantu.png',
      link: 'https://www.instagram.com/manoloreyoficial/?hl=pt-br',
    },
    {
      name: 'mundo geek',
      image: '../assets/images/influencers/mundogeek.png',
      link: 'https://www.youtube.com/@MundoGeekReal',
    },
    {
      name: 'natan por aí',
      image: '../assets/images/influencers/natan.png',
      link: 'https://www.youtube.com/@NatanporAi',
    },
    {
      name: 'noylan e mellu',
      image: '../assets/images/influencers/noylan&mellu.png',
      link: 'https://www.youtube.com/@noylan',
    },
    {
      name: 'o que não dizer',
      image: '../assets/images/influencers/naodizer.png',
      link: 'https://www.youtube.com/@OQueNaoDizerOficial',
    },
    {
      name: 'raphael rossato e helena palomanes',
      image: '../assets/images/influencers/raphael&helena.png',
      link: 'https://www.youtube.com/@RaphaelRossattodub',
    },
    {
      name: 'robin hood gamer',
      image: '../assets/images/influencers/robinhood.png',
      link: 'https://www.youtube.com/@RobinHoodGamer1',
    },
    {
      name: 'voice makers',
      image: '../assets/images/influencers/voicemakers.png',
      link: 'https://www.youtube.com/@VoiceMakers',
    },
    {
      name: 'wiris',
      image: '../assets/images/influencers/wiris.png',
      link: 'https://www.youtube.com/@WirisVianaofc',
    },
    {
      name: 'wirley contaifer e cadu paschoal',
      image: '../assets/images/influencers/wirley&cadu.png',
      link: 'https://www.youtube.com/@wirley.contaifer',
    },
  ];

  influencerCount: number = 0;

  nextInfluencerSlide() {
    this.influencerCount++;

    if (this.influencerCount >= this.influencers.length) {
      this.influencerCount = 0;
    }
  }

  previousInfluencerSlide() {
    this.influencerCount--;

    if (this.influencerCount < 0) {
      this.influencerCount = this.influencers.length - 1;
    }
  }

  ngOnInit(): void {}
}
