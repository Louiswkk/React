# Movie-App

這個 App 的效果是將 movie 的名字,評分以及簡介都 post 在網頁上

## TMDB-API

LINK:https://www.themoviedb.org
這個網站有一個 API 可以供 developer 使用,註冊完進去個人設定的 page 就能看到 API 的設定選項,複製 API_KEY 然後根據 API 的 document
做就可以了

## useState

useState 是 16.8 中新增的功能:HOOK 提供的功能,讓 developer 不需要寫 class 就能使用 state 和其他的功能

Example

```
const [searchTerm, setSearchTerm] = useState('');
```

上面這段 code 就是 useState 的用法,我們創建了一個 searchTerm 的變數,傳入一個空字串為初始值,setSearchTerm 就是更新 searchTerm 的手段

## useEffect

useEffect 最主要的作用就是讓 DOM 在每一次 render 之後都會執行 useEffect 裡面的 code
