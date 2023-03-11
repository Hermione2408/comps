import classnames from "classnames";

function Button({children,primary,secondary,success,warning,danger,outline,rounded,...rest}){
   const classes=classnames(rest.className,'flex items-center px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500 text-white':primary,
    'border-gray-500 bg-gray-500 text-white':secondary,
    'border-green-500 bg-green-500 text-white':success,
    'border-red-500 bg-red-500 text-white':danger,
    'border-yellow-500 bg-yellow-500 text-white':warning,
    'rounded-full':rounded,
    'bg-white':outline,
    'text-blue-500':outline && primary,
    'text-gray-500':outline && secondary,
    'text-green-500':outline && success,
    'text-red-500':outline && danger,
    'text-yellow-500':outline && warning,
   })

    return <button {...rest} className={classes}> {children}</button>;
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
