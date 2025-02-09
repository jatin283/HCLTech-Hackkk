const conn = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connection to database");
    } catch (error) {
        console.log(error);
    }
};
conn();