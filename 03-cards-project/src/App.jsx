import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
    {
      brandLogo: "https://imgs.search.brave.com/ssZqU8sM6yyQ6R6yTh3lBckm5jodvpLfYRCZ8kDeLLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3Lzhj/LzQwL2E3OGM0MDZl/NGFkOTVmNjhiZDhi/MDE0NTgyZWYzZWNl/LmpwZw",
      company: "Apple",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/o8LMarpE0LDeF9lcmFq_ySxvby2SiPRPPnc4bxYJptc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk2LzA5Ni9zbWFs/bC9nb29nbGUtc3lt/Ym9sLWxvZ28tZGVz/aWduLWlsbHVzdHJh/dGlvbi13aXRoLWJs/YWNrLWJhY2tncm91/bmQtZnJlZS12ZWN0/b3IuanBn",
      company: "Google",
      datePosted: "2 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/nvgxp2CWGH1NghV8Nz5VPmdyEUIAlScJRVNegnL75wM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMxOS9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLXdpdGgtYmxh/Y2stYmFja2dyb3Vu/ZC1mcmVlLXZlY3Rv/ci5qcGc",
      company: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://imgs.search.brave.com/IY6sX2z-2a56kuoR7Ns5eVFJp172yjnPdlOJCbjwJW0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3ctbG9nby1l/bWJsZW0tMC5wbmc",
      company: "Microsoft",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/Yg9ic8fIwahAk2YVZ4AGSqXYk54xJhokaG0va66AWsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y0LzI5/LzZhL2Y0Mjk2YWUy/ZjRjNzE2NjVkZGM4/OTgwZTAyN2Y5OGFl/LmpwZw",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/IHWEyt_j3vun7hSCD0HZ5oUVN3clHHj0HTASS1vrKzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/FRorI_gNkQUgCwUF-ZLNVHMZrJdzsrbbhmtYoQ7W7fk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzJh/LzY3L2UxMmE2NzIx/ZDUyZTA3OWM1ZTMz/NjMyZjY2ZGRiOGE5/LmpwZw",
      company: "Tesla",
      datePosted: "6 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Berlin, Germany"
    },
    {
      brandLogo: "https://imgs.search.brave.com/tAnepB6VmoSHNpdRTt9hugO1LxoAHQi42VXoQQg86ZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUzLzMx/LzhjLzUzMzE4Y2M0/MTUxNGM2ZWM3YzM3/OGM0MTMzZTZkNzcy/LmpwZw",
      company: "Nvidia",
      datePosted: "8 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Tokyo, Japan"
    },
    {
      brandLogo: "https://imgs.search.brave.com/lqjojNvPGo0OBkcS94dSuza8FFb1jUrOdTU08HljpOY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c29sb2dvLmFpLzIw/MjUvMDEwMi8yMDI1/MDEwMjExMzk0ODI0/NS5wbmc",
      company: "OpenAI",
      datePosted: "5 weeks ago",
      post: "ML Research Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$30/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/m5zuOzwGHgvxN_Y9_mwnluy-qS6MakLY_jfO5zwy-u4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIwLzk3/NS81NDcvbm9uXzJ4/L3NhbXN1bmctbG9n/by1zYW1zdW5nLWlj/b24tdHJhbnNwYXJl/bnQtZnJlZS1wbmcu/cG5n",
      company: "Samsung",
      datePosted: "11 days ago",
      post: "Android Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Seoul, South Korea"
    }
  ];

  return (
    <div className='parent'>

      {jobs.map(function (elem) {
        return <Card
          company={elem.company}
          logo={elem.brandLogo}
          date={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      })}

    </div>
  )
}

export default App
