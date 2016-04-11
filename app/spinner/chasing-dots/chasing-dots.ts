import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-chasing-dots',
  styles: [`
    .chasing-dots-spinner {
      position: relative;
      width: 40px;
      height: 40px;
      margin: 25px auto;
      
      -webkit-animation: sk-rotate 2.0s infinite linear;
      animation: sk-rotate 2.0s infinite linear;
    }
    
    .dot1,
    .dot2 {
      width: 60%;
      height: 60%;
      display: inline-block;
      position: absolute;
      top: 0;
      background-color: #333;
      border-radius: 100%;
      
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    
    .dot2 {
      top: auto;
      bottom: 0;
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    
    @-webkit-keyframes sk-rotate {
      100% {
        -webkit-transform: rotate(360deg)
      }
    }
    
    @keyframes sk-rotate {
      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg)
      }
    }
    
    @-webkit-keyframes sk-bounce {
      0%, 100% {
        -webkit-transform: scale(0.0)
      } 50% {
        -webkit-transform: scale(1.0)
      }
    }
    
    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  `],
  templateUrl: 'app/spinner/chasing-dots/chasing-dots.html'
})

export class ChasingDotsComponent extends BaseSpinner {}