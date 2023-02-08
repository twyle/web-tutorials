//SIDEBAR 
const menuItems = document.querySelectorAll('.menu-item');

//NOTIFICATIONS
const notifications = document.querySelector('#notifications')
const notificationsPopup = document.querySelector('.notifications-popup')

//BOOKMARKS
const bookmarks = document.querySelector('#bookmarks')
const bookmarksPopup = document.querySelector('.bookmarks-popup')

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')

//THEME
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')

var root = document.querySelector(':root')

const colorPallette = document.querySelectorAll('.choose-color span')

const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

//ANALYTICS
const analytics = document.querySelector('#analytics')
const analyticsModal = document.querySelector('.view-analytics')

//MESSAGE SOMEONE
const messageUser = document.querySelector('#message-user')
const messageUserModal = document.querySelector('.create-message')

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//EDIT PROFILE
const editProfile = document.querySelector('#edit-user-profile')
const editProfileModal = document.querySelector('.edit-profile')

//CONTEXT MENU DROPDOWN
const contextMenuDropdown = document.querySelector('#context-dropdown')
const contextMenuDropdownModal = document.querySelector('.dropdownmenu')

//BOOKMARK
const bookmarkButton = document.querySelector('#bookmark-button')

//COMMENT
const commentButton = document.querySelector('#comment-button')
const commentBox = document.querySelector('.comment-box')

//DELETE
const deleteButton = document.querySelector('#delete-button')
const deleteBox = document.querySelector('.delete-post')

//EDIT
const editButton = document.querySelector('#edit-button')
const editBox = document.querySelector('.edit-post')

//LIKE
const likeButton = document.querySelector('#like-button')

//COMMENTS
const commentsButton = document.querySelector('#post-comments-button')
const postBox = document.querySelector('.post-comments')

//Primary messages
const primaryMessages = document.querySelector('#primary')

//Friend requests
const friendRequests = document.querySelector('#requests')
const requests = document.querySelectorAll('.request');

//Friend Request Buttons
const requestsButtons = document.querySelectorAll('.fr');

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');
        // if(item.id != 'notifications'){
        //     document.querySelector('.notifications-popup').
        //     style.display = 'none';
        // }
        // else{
        //     document.querySelector('.notifications-popup').
        //     style.display = 'block';
        //     document.querySelector('#notifications .notification-count').
        //     style.display = 'none';
        // }
    })
})

notifications.addEventListener('click', ()=>{
    notificationsPopup.style.display = 'block';
    document.querySelector('#notifications .notification-count').
    style.display = 'none';
    setTimeout(() => {
        notificationsPopup.style.display = 'none';
    }, 2000)
})

bookmarks.addEventListener('click', ()=>{
    bookmarksPopup.style.display = 'block';
    setTimeout(() => {
        bookmarksPopup.style.display = 'none';
    }, 2000)
})

// MESSAGES

//search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase()
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex'
        }
        else{
            chat.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

// Highlight message box when message
messagesNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').
    style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

//THEME CUSTOMIZATION

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    console.log(e.target.classList)
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
        notificationsPopup.style.display = 'none';
    }
}

//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

//remove active class from font selector
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

//FONTS
fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }

        //change font size for root element
        document.querySelector('html').style.fontSize = fontSize;
    })

})

//remove active class from colors
const changeActiveColorClass = () => {
    colorPallette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

//change primary colors
colorPallette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass()

        if(color.classList.contains('color-1')){
            primaryHue = 252
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202
        }

        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

//theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg1.addEventListener('click', () => {
    //add active class
    bg1.classList.add('active')
    //remove active class from others
    bg3.classList.remove('active')
    bg2.classList.remove('active')
    window.location.reload()
})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'

    //add active class
    bg2.classList.add('active')
    //remove active class from others
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBG()
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '10%'
    lightColorLightness = '0%'

    //add active class
    bg3.classList.add('active')
    //remove active class from others
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBG()
})


//open modal
const openAnalyticsModal = () => {
    analyticsModal.style.display = 'grid';
}

const closeAnalyticsModal = (e) => {
    if(e.target.classList.contains('view-analytics')){
        analyticsModal.style.display = 'none'
    }
}

//close modal
analyticsModal.addEventListener('click', closeAnalyticsModal);

analytics.addEventListener('click', openAnalyticsModal);

//open modal
const openEditProfileModal = () => {
    editProfileModal.style.display = 'grid';
}

const closeEditProfileModal = (e) => {
    if(e.target.classList.contains('edit-profile')){
        editProfileModal.style.display = 'none'
    }
}

//close modal
editProfileModal.addEventListener('click', closeEditProfileModal);

editProfile.addEventListener('click', openEditProfileModal);

//open modal
const openMessageUserModal = () => {
    messageUserModal.style.display = 'grid';
}

const closeMessageUserModal = (e) => {
    if(e.target.classList.contains('create-message')){
        messageUserModal.style.display = 'none'
    }
}

//close modal
messageUserModal.addEventListener('click', closeMessageUserModal);

messageUser.addEventListener('click', openMessageUserModal);

//open modal
const openDropDownMenuModal = () => {
    contextMenuDropdownModal.style.display = 'block';
    setTimeout(() => {
        contextMenuDropdownModal.style.display = 'none';
    }, 2000)
}

contextMenuDropdown.addEventListener('click', openDropDownMenuModal);

bookmarkButton.addEventListener('click', ()=>{
    var color = document.querySelector('#bookmark-button').style.color;
    if (color == '')
    {
        document.querySelector('#bookmark-button').
        style.color = 'darkgray';
    }  
    else if (color == 'lightgray')
    {
        document.querySelector('#bookmark-button').
        style.color = 'darkgray';
    }
    else if(color == 'darkgray')
    {
        document.querySelector('#bookmark-button').
        style.color = 'lightgray';
    }
})

commentButton.addEventListener('click', ()=>{
    commentBox.style.display = 'inline'
})

const closeCommentBox = (e) => {
    console.log(e.target.classList)
    if(e.target.classList.contains('comment')){
        commentBox.style.display = 'none'
    }
}

likeButton.addEventListener('click', () => {
    console.log(likeButton.style.color)
    if (likeButton.style.color != 'red')
    {
        likeButton.style.color = 'red'
        likeButton.style.fontSize = '2rem';
        setTimeout(() => {
            likeButton.style.fontSize = '1.4rem';
        }, 2000)
    }
    else if(likeButton.style.color == 'red')
    {
        likeButton.style.color = ''
    }
})


//open modal
const openDeletePostModal = () => {
    deleteBox.style.display = 'grid';
}

const closeDeletePostModal = (e) => {
    if(e.target.classList.contains('delete-post')){
        deleteBox.style.display = 'none'
    }
}

//close modal
deleteBox.addEventListener('click', closeDeletePostModal);

deleteButton.addEventListener('click', openDeletePostModal);


//open modal
const openEditPostModal = () => {
    editBox.style.display = 'grid';
}

const closeEditPostModal = (e) => {
    if(e.target.classList.contains('edit-post')){
        editBox.style.display = 'none'
    }
}

//close modal
editBox.addEventListener('click', closeEditPostModal);

editButton.addEventListener('click', openEditPostModal);

//open modal
const openPostCommentsModal = () => {
    postBox.style.display = 'grid';
}

const closePostCommentsModal = (e) => {
    if(e.target.classList.contains('post-comments')){
        postBox.style.display = 'none'
    }
}

//close modal
postBox.addEventListener('click', closePostCommentsModal);

commentsButton.addEventListener('click', openPostCommentsModal);


primaryMessages.addEventListener('click', () => {
    primaryMessages.classList.add('active')
    friendRequests.classList.remove('active')
    friendRequests.style.color = 'var(--color-primary)'
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

friendRequests.addEventListener('click', () => {
    primaryMessages.classList.remove('active')
    primaryMessages.style.color = 'var(--color-primary)'
    friendRequests.classList.add('active')
    friendRequests.style.color = 'black'

    requests.forEach(req => {
        req.style.boxShadow = '0 0 1rem var(--color-primary)';
        setTimeout(() => {
            req.style.boxShadow = 'none'
        }, 2000)
    })
})


requestsButtons.forEach(rq => {
    rq.addEventListener('click', e => {
        console.log(rq.closest('#request-div'))
        elem = rq.closest('#request-div')
        elem.remove()
    })
})
