/**
 * Class represents paper model.
 */
export var Paper = (function () {
    function Paper(citation, url, paperId) {
        this.citation = citation;
        this.url = url;
        this.paperId = paperId;
    }
    return Paper;
}());
