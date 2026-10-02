    const main = document.querySelector('main')
    const inp = document.getElementById('mySearch')
    const ulPages = document.getElementById('pages')
    let skip = 0
    let Api = 'https://dummyjson.com/products?limit=20&skip=' + skip

    async function getApi(Api) {
        let a = await fetch(Api)
        if (a.ok) return await a.json()
    }

    function setNumPages(i) {
        skip = (i * 20) - 20
        Api = 'https://dummyjson.com/products?limit=20&skip=' + skip
        generate(0)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function allProducts(s, i) {
        s.classList.toggle('active')
        if (s.nextElementSibling) {
            s.nextElementSibling.classList.remove('active')
        }
        if (s.previousElementSibling) {
            s.previousElementSibling.classList.remove('active')
        }
        if (i) Api = 'https://dummyjson.com/products?sortBy=title&order=asc'
        else Api = 'https://dummyjson.com/products?limit=20&skip=0'
        generate(0)
    }


    let flag = true
    generate(0)
    async function generate(id) {
        if (id != 0) {
            Api = 'https://dummyjson.com/products/' + id
        }

        let data = await getApi(Api)
        /////////pagination///////
        if (flag) {
            const num = Math.ceil(data.total / 20)
            console.log(num)
            for (let i = 1; i <= num; i++) {
                const li = document.createElement('li')
                li.innerHTML = i
                li.addEventListener('click', () => {
                    document.querySelectorAll('#pages > li').forEach(item => item.classList.remove('active'))
                    li.classList.add('active')
                    setNumPages(i)
                })
                ulPages.append(li)
            }
            const liPages = document.querySelectorAll('#pages>li')
            liPages[0].classList.add('active')
            // console.log(liPages);

            flag = !flag
        }
        if (data.products == undefined) {
            const details = document.createElement('section')
            details.classList.add('details')
            details.style.display = 'block'
            details.innerHTML = `
                    <span onclick="myclose(this)">X</span>
                        <img src="${data.images[0]}" alt="">
                            <h2>${data.title}</h2>
                            <p>${data.description}</p>
                            <ul>
                                <li>Brand :  ${data.brand}</li>
                                <li>Category : ${data.category}</li>
                                <li>Price : ${data.price} $</li>
                                <li> ★ ${data.rating.toFixed(1)}</li>
                                <li>${data.tags[1]}</li>
                                <li>Weight : ${data.weight}</li>
                                <li>Width : ${data.dimensions.width} cm</li>
                                <li>Height : ${data.dimensions.height} cm</li>
                                <li>${data.returnPolicy}</li>
                                <li>Min. Order : ${data.minimumOrderQuantity}</li>
                            </ul>
                            <h3>reviews</h3>
                            <ul>
                                ${data.reviews.map((self) => {
                return ` 
                                        <li>
                                            <div class="review-top">
                                                <span class="review-rating">★ ${self.rating}</span>
                                            </div>
                                            <p class="review-text">${self.comment}</p>
                                            <div class="review-user">
                                                <strong>${self.reviewerName}</strong>
                                                <span>${self.reviewerEmail}</span>
                                            </div>
                                        </li>
                                   `}).join('')}    
                            </ul>
                            <img src="${data.meta.qrCode}" alt="">
                        `
            main.append(details)
        }
        else {
            main.innerHTML = ''
            data.products.map((val) => {
                const box = document.createElement('div')
                box.setAttribute('onclick', `generate(${val.id})`)
                box.innerHTML = `
                <img src="${val.images[0]}" alt="">
                <h2>${val.title}</h2>
                <p>${val.description}</p>
                <ul>
                    <li>${val.brand}</li>
                    <li>${val.category}</li>
                    <li>${val.price} $</li>
                    <li> ★ ${val.rating.toFixed(1)}</li>
                    <li>Add to basket</li>
                    </ul>
                    `
                main.append(box)

            })
        }

    }
    function myclose(s) {
        s.parentElement.style.display = 'none'
    }

    function proSearch() {
        inp.classList.toggle('open-search')
        ulPages.classList.toggle('hide')
    }
    inp.addEventListener('keyup', () => {
        let temp = inp.value
        Api = 'https://dummyjson.com/products/search?q=' + temp
        generate(0)
        if (temp == '') {
            ulPages.classList.remove('hide')
        }
        else ulPages.classList.add('hide')
    })