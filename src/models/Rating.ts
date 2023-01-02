import { z } from "zod";


export type Rating =
{
    numberOfReviews: number;
    score: number;
};

enum errorMessage
{
	noNumberOfReviews = "Number of reviews is required",
	invalidNumberOfReviewsType = "Number of reviews must be a number",
	invalidNumberOfReviewsRange = "Number of reviews must not be negative",
	invalidNumberOfReviewsValue = "Number of reviews must be an integer",

	noRatingScore = "Rating score is required",
	invalidRatingScoreType = "Rating score must be a number",
	invalidRatingScoreRange = "Rating score must be a number between 1 and 5",
	invalidRating = "Invalid rating",
}


const shape =
{
	numberOfReviews:
		z.number({ required_error: errorMessage.noNumberOfReviews, invalid_type_error: errorMessage.invalidNumberOfReviewsType })
		 .nonnegative(errorMessage.invalidNumberOfReviewsRange)
		 .int(errorMessage.invalidNumberOfReviewsValue)
		 .default(0),

	score:
		z.number({ required_error: errorMessage.noRatingScore, invalid_type_error: errorMessage.invalidRatingScoreType })
		 .min(0, errorMessage.invalidRatingScoreRange)
		 .max(5, errorMessage.invalidRatingScoreRange),
};

export const RatingSchema = z.object(shape, { invalid_type_error: errorMessage.invalidRating })
							 .passthrough();

//export type Rating = z.infer<typeof RatingSchema>;