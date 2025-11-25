import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src="https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw" alt="" />
                    <button>Save <Bookmark size={12} /> </button>
                </div>
                <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div className='tag'>
                        <h4>Part Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card
