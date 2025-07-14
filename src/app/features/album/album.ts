import {Component, OnInit} from '@angular/core';
import {NzUploadChangeParam, NzUploadComponent, NzUploadFile, UploadFileStatus} from 'ng-zorro-antd/upload';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzModalComponent} from 'ng-zorro-antd/modal';
import {NzListComponent} from 'ng-zorro-antd/list';
import {NzCommentComponent} from 'ng-zorro-antd/comment';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import {NzFormItemComponent} from 'ng-zorro-antd/form';
import {FormsModule} from '@angular/forms';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {AlbumService} from '../../service/album.service';
import {AsyncPipe} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd/message';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


interface User {
  author: string;
  avatar: string;
}

interface Data extends User {
  content: string;
  datetime: Date;
  displayTime: string;
}

@Component({
  selector: 'app-album',
  imports: [
    NzUploadComponent,
    NzIconDirective,
    NzModalComponent,
    NzListComponent,
    NzCommentComponent,
    NzAvatarComponent,
    NzFormItemComponent,
    FormsModule,
    NzButtonComponent,
    NzInputDirective,
    AsyncPipe
  ],
  templateUrl: './album.html',
  styleUrl: './album.scss',
})
export class Album  implements OnInit {
  protected _albumList: BehaviorSubject<NzUploadFile[]> = new BehaviorSubject<NzUploadFile[]>([]);
  previewImage: string | undefined = '';
  previewVisible: boolean = false;

  data: Data[] = [];
  submitting = false;
  user: User = {
    author: 'Han Solo',
    avatar: '/assets/imgs/me.jpg'
  };
  inputValue = '';

  constructor(
    private albumService: AlbumService,
    private messageService: NzMessageService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this._albumList.next([]);
      let albumList = [];
      data.forEach(item => {
        let alb: NzUploadFile = {
          uid: item.uid,
          name: item.name,
          status: item.status as UploadFileStatus,
          url: item.url,
          percent: item.percent,
        }
        albumList.push(alb);
      });
      this._albumList.next(albumList);
    })
  }

  handleSubmit(): void {

  }

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status == 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.messageService.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.messageService.error(`${file.name} file upload failed.`);
    }
  }
}
