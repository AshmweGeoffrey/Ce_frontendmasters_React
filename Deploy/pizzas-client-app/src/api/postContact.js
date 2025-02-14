export default async function postContact(name,email,message){
    const response = await fetch("/api/contact",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({name,email,message})
    });

    if(!response.ok){
        throw new Error("Network Response Was Not ok. Send Help");
    }
    return response.json();
}