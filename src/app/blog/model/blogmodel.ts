export class BlogModel{
    constructor(public id: string, 
                public authorName: string,
                public postedDate: string, 
                public title: string,
                public post: string, 
                public imageUrl: string){}
}