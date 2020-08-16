
const renderErr = () => {

    const Card = `<svg width="400" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          height: 180px;
          width: 400px;
          padding:10px;
          /* background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.8)
            ),
            url(https://dev.to/social_previews/article/428293.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center; */
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          /* color: white; */
          font-family: Arial, Helvetica, sans-serif;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
          ),
          url(data:image/svg+xml;base64,CjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTIwIDYwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiB3aWR0aD0iMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNi4yIDQ4LjZ2LTM3LjJjMC0uNS4xLTEgLjMtMS41cy41LS45LjgtMS4zYy40LS40LjgtLjcgMS4zLS45czEtLjMgMS41LS4zaDU5LjdjLjUgMCAxIC4xIDEuNS4zcy45LjUgMS4zLjkuNy44LjkgMS4zLjMgMSAuMyAxLjV2MzcuMWMwIC41LS4xIDEtLjMgMS41cy0uNS45LS45IDEuMy0uOC43LTEuMy45LTEgLjMtMS41LjNoLTU5LjZjLS41IDAtMS0uMS0xLjUtLjNzLS45LS41LTEuMy0uOS0uNy0uOC0uOS0xLjNjLS4yLS40LS4zLS45LS4zLTEuNHoiIGZpbGw9IiMwYTBhMGEiLz48cGF0aCBkPSJtNjguMyAyNC45Yy43IDIuNiAxLjggNi45IDIuNSA5LjYgMS4xIDQuMSAxLjQgNSAyLjMgNS45LjYuNyAxLjQgMS4xIDEuOSAxLjEgMSAwIDIuNC0xIDIuOC0yLjIuMy0uOSA1LTE4LjQgNS0xOC44IDAtLjEtLjktLjItMi4xLS4xbC0yLjEuMS0xLjkgNy4xYy0xIDQuNC0xLjcgNi44LTEuOSA2LjQtLjMtLjgtMy41LTEzLjUtMy41LTEzLjZzLTEtLjEtMi4xLS4xaC0yLjJ6bS0xMy42LTMuOGMtLjcuOS0uNyAxLjMtLjcgOS44djguOWwuOC44Yy44LjggMSAuOCA1LjMuOGg0LjV2LTMuNmwtMy40LS4xLTMuNC0uMXYtNWwyLjEtLjEgMi4xLS4xdi0zLjZoLTQuM3YtNWg3di0zLjZoLTQuN2MtNC42IDAtNC42IDAtNS4zLjl6bS03LjYgMy40Yy44LjYuOC44LjggNi4xIDAgNS4yIDAgNS41LS43IDYuMi0uNi41LTEuMi43LTIuMy43aC0xLjZsLS4xLTYuOS0uMS02LjloMS42YzEuMS4yIDEuOS40IDIuNC44em0tNy43IDYuM3YxMC42aDMuN2M0LjEgMCA1LjktLjUgNy4xLTIuMiAxLjMtMS42IDEuNS0zIDEuMy05LjMtLjEtNS42LS4yLTYtLjktNy4yLTEuMy0yLjEtMi43LTIuNi03LjMtMi42aC00djEwLjd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
        background-repeat: no-repeat;
        background-size: 60px;
        background-position: 95% 90%;
        }
        .title {
          font-size: 12px;
        }
        .title h1 {
          font-weight: 500;
        }
      </style>
      <div class="container">
        <div class="title">
          <h1>404 🚧</h1>
        </div>
        <h5 style="font-weight:400; margin-top:5px;">Can't find it...</h5>
      </div>
        </div></foreignObject></svg>`
        return Card
}

module.exports = renderErr