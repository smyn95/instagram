export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username', // studio UI
      name: 'username', //  DB접근용,  key
      type: 'string'
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string'
    },
    {
      title:'Image',
      name:'image',
      type:'string'
    },
    {
      title:'Following',
      name:'following',
      type:'array',
      of:[
        {
          type:'reference',
          to:[{type:'user'}]
        }
      ],
      // 중복 허용 X
      validation: Rule => Rule.unique()
    },
    // 나를 팔로잉 하는 사람들
        {
      title:'Followers',
      name:'followers',
      type:'array',
      of:[
        {
          type:'reference',
          to:[{type:'user'}]
        }
      ],
      // 나의 팔로워는 고유, 중복 허용 X
      validation: Rule => Rule.unique()
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
            of:[
        {
          type:'reference',
          to:[{type:'post'}]
        }
      ],
      validation: Rule => Rule.unique()
    }
  ],
}