    function computerPlay() {
        let arr = ['rock', 'scissors', 'paper']
        let randomOption = arr[Math.floor(Math.random() * arr.length)]
        return (randomOption)



    }
    //computerPlay()

    function evaluator() {
        let choice = computerPlay;
        alert(choice)
    }

    document.getElementById("rock").addEventListener("click", myFunction);

    function myFunction() {
        if (playerInput > computerInput) {
            return ("You win" + playerInput + "wins over" + "computerInput")
        }
    } else if (playerInput = computerInput) {
        return ("Its a draw")
    } else {
        return ("You loose" + computerInput + "wins over" + playerInput)
    }

    function myFunction() {
        if (playerInput > computerInput) {
            return ("You win" + playerInput + "wins over" + "computerInput")
        } else if (playerInput == computerInput) {
            return ("Its a draw")
        } else {
            return ("You loose" + computerInput + "wins over" + playerInput)
        }
    }


