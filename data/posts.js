import { users } from "./user";

export const POSTS=[
    {
        
        imageurl:'https://alarifeen.org/wp-content/uploads/2019/04/the-chairperson.jpg',
        user:users[0].name,
        likes:123,
        caption:'This is a caption sd fghd sdkf sfk fdd musman usman y name is mndf shd ss',
        postedAt:'6 minutes ago',
        profile_picture:users[0].image,
        comments: [
            {
                user: 'Vadim',
                comment: 'This is a comment'

            },
            {
                user: 'Vadim',
                comment: 'This is a comment'

            },
            {
                user: 'Vadim',
                comment: 'This is a comment'

            },
            
        ]
    },
    {
        
        imageurl:'https://alarifeen.org/wp-content/uploads/2019/04/the-chairperson.jpg',
        user:users[1].name,
        likes:12113,
        caption:'This is a captionffg ddf dfffs dffd',
        postedAt:'6 minutes ago',
        profile_picture:users[1].image,
        comments:[
            {
                user: 'Vadim',
                comment: 'This is a comment'

            },
            {
                user: 'Vadim',
                comment: 'This is a comment'

            }
        ]
    },
    {
        
        imageurl: 'https://alarifeen.org/wp-content/uploads/2019/04/the-chairperson.jpg',
        likes: 123,
        user: users[2].name,
        caption: 'This is a caption',
        postedAt: '6 minutes ago',
        profile_picture: users[2].image,
        comments: [
            {
                user: 'Vadim',
                comment: 'This is a comment'

            },
            {
                user: 'Vadim',
                comment: 'This is a comment'

            }
        ]
    },

    

]