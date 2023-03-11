import Button from "../components/button";
import {GoBell,GoCloudDownload,GoDatabase} from 'react-icons/go'

function ButtonPage(){
const handleClick =()=>{
console.log('Click!1')
}

    return <div>
  <div>
    <Button primary className="mb-5" onClick={handleClick}><GoBell/>
    Click here</Button>
  </div>
  <div>
    <Button secondary outline onMouseEnter={handleClick}>
        <GoCloudDownload/>Buy Now!</Button>
  </div>
  <div>
    <Button warning><GoDatabase/>Hide Ads!</Button>
  </div>

  <div>
    <Button success outline rounded>Something!</Button>
  </div>

  <div>
    <Button danger outline> See Deals!</Button>
  </div>

    </div>
}

export default ButtonPage;