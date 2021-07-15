import { useEffect, useState } from "react";
// "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDfvIinPmGfJ_7xUT-k4KIldSmdCaU4-Oo&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6";
function Youtube() {
	const [youTubeVideos, setYouTubeVideos] = useState([]);
	useEffect(() => {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyDr5hAYICU77mr03xv_MpwfJFF6dk_TKTM&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
		)
			.then((response) => response.json())
			.then((data) => {
				const videos = data.items;
				setYouTubeVideos(videos);
			});
	}, []);
	return (
		<section className="youtubeVideosWrapper">
			<div className="allVideosWrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper">
								Latest Videos <br />
								<br />
							</div>
						</div>

						{youTubeVideos?.map((singleVideo, i) => {
							let vidId = singleVideo.id.videoId;
							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
							let videoWrapper = (
								<div key={i} className="col-sm-12 col-md-6 col-lg-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<a href={vidLink} target="_blank" rel="noreferrer">
												<img
													src={singleVideo.snippet.thumbnails.high.url}
													alt="thumbnails"
												/>
											</a>
										</div>
										<div className="videoInfoWrapper">
											<div className="videoTitle">
												<a href={vidLink} target="_blank" rel="noreferrer">
													{singleVideo.snippet.title}
												</a>
											</div>
											<div className="videoDesc">
												{singleVideo.snippet.description}
											</div>
										</div>
									</div>
								</div>
							);
							return videoWrapper;
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Youtube;
