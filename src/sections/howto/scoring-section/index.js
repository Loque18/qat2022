const ScoringSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle has-text-centered has-font-qatar mb-6">Points</h1>
            <p className="has-text-cream has-font-qatar is-size-5 has-text-centered">
                Your team will have 11 random nationalities.
                <br />
                <br />
                Each nationality will participate in the total score of your NFT team, based on the results of that
                national team in the official tournament.
                <br />
                <br />
                If one of the national teams in your NFT ends up winning in the real tournament, your NFT team will get
                +3 points. If it ties, you will get +1 points, and if it loses, you will get 0.
                <br />
                <br />
                The maximum total points you can make per round is: 11 nationalities x +3 points = +33 points. This
                means that all the nationalities in your team won their games in the official tournament.
                <br />
                <br />
                Each NFT team holder will be able to see his total number of points live on the website dashboard,
                Discord and OpenSea.
            </p>
        </section>
    );
};

export default ScoringSection;
