
export const ReturnConfig = () =>{
  return {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    accountId: process.env.REACT_APP_EMAILJS_ACCOUNT_ID
  }
}