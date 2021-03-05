import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HashtagsService } from 'src/app/services/hashtags.service';
import { TiktoksService } from 'src/app/services/tiktoks.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {
  hashtags: any = [];

  constructor(
    private authService: AuthService,
    private tiktoksService: TiktoksService,
    private usuariosService: UsuariosService,
    private hashtagsService: HashtagsService
  ) { }

  ngOnInit(): void {
    this.renderHashtags();
  }

  renderHashtags() {
    this.hashtagsService.obtenerHashtags()
      .subscribe(
        res => {
          // console.log(res);
          this.hashtags = res;
        },
        error => console.log(error)
      );
  }

  convertirHashtags(numeroVideos) {
    let html_hashtag;
    let conversion;
    if (numeroVideos >= 1000000000) {
      conversion = numeroVideos / 1000000000;
      html_hashtag = `${(conversion).toFixed(0)}B`;
      return html_hashtag;
    }
    if (numeroVideos >= 1000000) {
      conversion = numeroVideos / 1000000;
      html_hashtag = `${(conversion).toFixed(0)}M`;
      return html_hashtag;
    }
    return numeroVideos;
    
  }

  renderTiktoks() {

  }

  verificarNuevoHashtag(data) {
    this.hashtagsService.verificarNuevoHashtag(data)
      .subscribe(
        res => {
          console.log(res);
        },
        error => console.log(error)
      )
  }

}
