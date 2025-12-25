export const GET = () => {
    try {
        console.log("inside the route")
        
        return Response.json({ success: true,  message: "Hello world" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, message: "Error", error: error }, {status: 500});
    }
};