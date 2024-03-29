import Link from './link';

function Sidebar(){
    const links =[
        {label:'Dropdown',path:'/'},
        {label:'Accordion',path:'/accordion'},
        {label:'Buttons',path:'/button'},
        {label:'Modal',path:'/modal'},
        {label:'Table',path:'/table'}

    ];
    const renderedLinks =links.map((link)=>{
return <Link key={link.label} to={link.path} className='mb-3'activeClassName="font-bold border-l-4 border-nlue-500 pl-2">{link.label}</Link>
    })
return(
<div className='sticky top-0 overflow-y-scroll flex flex-col items-start'> 
    {renderedLinks}
</div>
)
}

export default Sidebar