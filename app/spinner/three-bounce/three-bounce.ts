import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-three-bounce',
  styles: [`
    .three-bounce-spinner {
      width: 70px;
      margin: 25px auto;
    }
    
    .three-bounce-spinner > div {
      width: 18px;
      height: 18px;
      background-color: #333;
    
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }
    
    .three-bounce-spinner .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    
    .three-bounce-spinner .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    
    @-webkit-keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0)
      } 40% {
        -webkit-transform: scale(1.0)
      }
    }
    
    @keyframes sk-bouncedelay {
      0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    }
  `],
  templateUrl: 'app/spinner/three-bounce/three-bounce.html'
})

export class ThreeBounceComponent extends BaseSpinner {}
