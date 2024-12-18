import {
    COMMA_POPULARITIES,
    computeKeyPath,
    slowTestOnlyRunInFullSuite,
    rank,
    Ranked,
    RankStrategy,
    ScalaPopularityStat,
} from "../../../../../src"

describe("COMMA_POPULARITIES", (): void => {
    it("the fractional ranks are correct", (): void => {
        slowTestOnlyRunInFullSuite()

        const unrankedPopularities: ScalaPopularityStat[] = COMMA_POPULARITIES.map(
            (popularity: Ranked<ScalaPopularityStat>): ScalaPopularityStat => ({
                two3FreeClass: popularity.two3FreeClass,
                votes: popularity.votes,
            }),
        )

        const reRankedPopularities: Ranked<ScalaPopularityStat>[] = rank(unrankedPopularities, {
            by: computeKeyPath("votes"),
            strategy: RankStrategy.FRACTIONAL,
            descending: true,
        })

        expect(reRankedPopularities).toEqual(COMMA_POPULARITIES)
    })
})
