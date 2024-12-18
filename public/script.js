document.addEventListener('DOMContentLoaded', function() {
  fetch('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJb8LG9Z_fVDURCYmh_TeN2To&fields=reviews&key=AIzaSyB5bNeXwCJaBfTbiM4wVdZiso3Escxn4-4') // ここはAPIのエンドポイント
    .then(response => response.json())
    .then(data => {
      const reviewsContainer = document.getElementById('reviews-container');
      data.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        
        // レビュー内容を作成
        reviewElement.innerHTML = `
          <h3>${review.author_name}</h3>
          <p>評価: ${review.rating} / 5</p>
          <p>${review.text}</p>
        `;
        
        reviewsContainer.appendChild(reviewElement);
      });
    })
    .catch(error => {
      console.error('エラー:', error);
    });
});