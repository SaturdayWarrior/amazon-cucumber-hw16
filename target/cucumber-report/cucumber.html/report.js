$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mobiletest.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile search functionality check",
  "description": "",
  "id": "mobile-search-functionality-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9895514100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LaptopStepDefs.userIsOnTheAmazonHomepage()"
});
formatter.result({
  "duration": 349413100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should be able to purchase mobile phone successfully",
  "description": "",
  "id": "mobile-search-functionality-check;user-should-be-able-to-purchase-mobile-phone-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User search for \"Mobile Phone\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "finds the selection from the pages \"Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "selects the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verifies the add to cart message \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phone",
      "offset": 17
    }
  ],
  "location": "LaptopStepDefs.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 235808200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopStepDefs.clicksOnTheSearchButton()"
});
formatter.result({
  "duration": 3445658000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night",
      "offset": 36
    }
  ],
  "location": "LaptopStepDefs.findsTheSelectionFromThePages(String)"
});
formatter.result({
  "duration": 19054190300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "LaptopStepDefs.selectsTheQuantity(String)"
});
formatter.result({
  "duration": 278051200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopStepDefs.clicksOnAddToCartButton()"
});
formatter.result({
  "duration": 3004006500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 34
    }
  ],
  "location": "LaptopStepDefs.verifiesTheAddToCartMessage(String)"
});
formatter.result({
  "duration": 5229225800,
  "status": "passed"
});
formatter.after({
  "duration": 1041434500,
  "status": "passed"
});
});