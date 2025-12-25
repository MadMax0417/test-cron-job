export const GET = () => {
    try {
        console.log("inside the sgkfjnsf")
        
        return Response.json({ success: true,  message: "Hello sgfsdfgdfworld" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, message: "dgfdsgf", error: error }, {status: 500});
    }
};