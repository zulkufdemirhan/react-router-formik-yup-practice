import "./loginPanel.css"
import {useFormik} from 'formik'
import validationSchema from "./validations"

export default function LoginPanel() {
        const {handleSubmit,handleChange,values,errors,touched,handleBlur}=useFormik({
            initialValues:{
                email:"",
                password:"",
            },
            onSubmit:(values)=>{
                console.log(values)
            },
            validationSchema,
        })
return (
    <form className='loginBox' onSubmit={handleSubmit}>
        <div className='loginInput'>
            <input  name="email" placeholder="email" id="emailInput" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && ( <p>{errors.email}</p>)}
            <input type="password" name="password" placeholder="password" id="passInput" value={values.password} onChange={handleChange} onBlur={handleBlur} /> 
                {errors.password && touched.password && ( <p>{errors.password}</p>)}           
        </div>
        <div className='radioInput'>
            <input type="checkbox"/> 
            <lable>Accept All Rules</lable>
        </div>
        <div className='submitInput'>
            <input type="submit" id="submitInput"/>
        </div>
    </form>
)}

