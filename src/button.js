import propTypes from "prop-types";

function Button({children,primary,secondary,success,warning,danger,outline,rounded}){
    let baseClassName='px-3 py-1.5 border'
    if(primary){
        baseClassName+=''
    }


    return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>;
}

Button.propTypes={
    //custom validator 
    checkVariationValue:({primary,secondary,success,warning,danger})=>{
       const count= Number(!!primary)+Number(!!secondary)+Number(!!warning)+Number(!!success)+Number(!!danger);
       
       if(count >1){
        return new Error('Only one of primary,secondary,success,waring,danger can be true')

       }
    }
}
export default Button;

// <Button primary={true}>Click here</Button> == <Button>Click here</Button>
