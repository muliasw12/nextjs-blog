

const ProfilePage = () => {
    return (
        <section class="container">
        <div class="title">
            <h2>My Profile</h2>
            <div class="underline"></div>
        </div>
        <article class="review">
            <div class="img-container">
                <img src={"/images/person-1.jpeg"} id={"person-img"} alt={""}/>
            </div>
            <h4 id="author">Sara Jones</h4>
            <p id="job">Front End Developer</p>
            <p id="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Animi, cum voluptas? Debitis expedita harum atque beatae 
                perferendis veniam sunt asperiores eaque eius culpa inventore 
                recusandae magni, facilis rerum rem autem?
            </p>
        </article>
    </section>
    );
};
  
export default ProfilePage;