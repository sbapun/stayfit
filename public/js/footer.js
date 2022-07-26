const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="footer-content">
        <img src="../img/logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li></li><a href="#" class="footer-link">t-shirts</a></li>
            <li></li><a href="#" class="footer-link">joggers</a></li>
            <li></li><a href="#" class="footer-link">trausers</a></li>
            <li></li><a href="#" class="footer-link">shoe</a></li>
            <li></li><a href="#" class="footer-link">watch</a></li>
            <li></li><a href="#" class="footer-link">shorts</a></li>
            <!--<li></li><a href="#" class="footer-link">t-shirts</a></li>
            <li></li><a href="#" class="footer-link">t-shirts</a></li>
            <li></li><a href="#" class="footer-link">t-shirts</a></li>-->

          </ul>
          <ul class="category">
            <li class="category-title">women</li>
            <li></li><a href="#" class="footer-link">t-shirts</a></li>
            <li></li><a href="#" class="footer-link">joggers</a></li>
            <li></li><a href="#" class="footer-link">trausers</a></li>
            <li></li><a href="#" class="footer-link">shoe</a></li>
            <li></li><a href="#" class="footer-link">watch</a></li>
            <li></li><a href="#" class="footer-link">shorts</a></li>
            <!--<li></li><a href="#" class="footer-link">t-shirts</a></li>
            <li></li><a href="#" class="footer-link">t-shirts</a></li>
            <li></li><a href="#" class="footer-link">t-shirts</a></li>-->

          </ul>
        </div>
        
      </div>
      <p class="footer-title">about website</p>
        <p class="info">Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. Labore ipsa rerum, accusamus deserunt voluptate sequi est culpa sint facilis 
           consequatur, corrupti odit explicabo numquam pariatur delectus? Sunt, natus quibusdam nihil ducimus laudantium, 
           voluptate voluptas necessitatibus sapiente libero ipsum iste velit. Tempora explicabo similique, corporis 
           veritatis amet suscipit eius obcaecati soluta veniam excepturi assumenda dignissimos reprehenderit culpa fuga, 
           necessitatibus cupiditate modi! Doloribus provident expedita sunt. Sed eaque ea veritatis maxime nulla exercitationem aliquam
            aliquid minus inventore itaque consequatur vel eos, eveniet cumque nihil molestias repudiandae incidunt aperiam 
            totam illum culpa aspernatur quo eligendi. Est nam fugiat consectetur quae quisquam! Laborum, nisi!</p>
            <p class="info">support emails - bapundas9114@gmail.com</p>
            <P class="info"> telephone - 7008621195</P>
            <div class="footer-social-container">
              <div>
                <a href="#" class="social-link">terms & service</a>
                <a href="#" class="social-link">Privacy page</a>
              </div>
              <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
              </div>
            </div>
            <P class="footer-credit">stayfit , a best gym apparels online store</P>

    `;
};

createFooter();
