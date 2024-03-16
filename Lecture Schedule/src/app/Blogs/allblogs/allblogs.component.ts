import { Component, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.scss'],
})
export class AllblogsComponent {
  imgshow: string = '';
  blogs: any[] = [];
  constructor(
    private httpserv: HttpService,
    private activerouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.httpserv.GET(AdminController.GetAllBlogs).subscribe((res) => {
      this.blogs = res;
      console.log(res);
    });
  }

  delete(id: any) {
    this.blogs = this.blogs.filter((p) => p.blogId != id);
    this.httpserv
      .DELETE(AdminController.DeleteBlog(id))
      .subscribe(() => (this.blogs = this.blogs.filter((p) => p.blogId != id)));

    console.log(id);
  }

  image: Uint8Array[] = [];
  convertImageToByteArray(file: File): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer);
        resolve(byteArray);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }
  /****************/

  /***      convert image to from bytes to url               ****/
  byteArrayToBlob(byteArray: Uint8Array, contentType: string): Blob {
    return new Blob([byteArray], { type: contentType });
  }

  blobToDataURL(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result as string;
        resolve(dataURL);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  /****************/

  /****  read image file from device   *******/

  async handleImageUpload(event: any, id: string, x: string) {
    const file = event.target.files[0];

    const formData = new FormData();

    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('BlogId', id);
      formData.append('Type', x);
      const byteArray = await this.convertImageToByteArray(file);
      this.image[0] = byteArray;
      const lob = this.byteArrayToBlob(this.image[0], '');
      this.blobToDataURL(lob).then((_dataURL) => {
        this.imgshow = _dataURL;
        console.log(formData.get('Type'));
        console.log(formData.get('BlogId'));

        // Define headers (if needed)
        const headers = new HttpHeaders({
          'Content-Type': 'multipart/form-data',
          // Add any other headers if necessary
        });
        if (_dataURL != null) {
          this.httpserv
            .POST(AdminController.Addattachment, formData)
            .subscribe((res) => {
              console.log(res);
            });
        }
        if (x == 'main') {
          this.blogs.forEach((data) => {
            if (data.blogId == id) {
              data.mainImageUrl = this.imgshow;
            }
          });
        }
        if (x == 'detail') {
          this.blogs.forEach((data) => {
            if (data.blogId == id) {
              data.detailImageUrl = this.imgshow;
            }
          });
        }
      });
    }
  }

  publish(id: any) {
    this.blogs.forEach((data) => {
      if (data.blogId == id) {
        data.isPublished = !data.isPublished;
        this.httpserv
          .PUT(AdminController.UpdatePublishedStatus(id))
          .subscribe((res) => {
            console.log(res);
          });
      }
    });
  }
}
