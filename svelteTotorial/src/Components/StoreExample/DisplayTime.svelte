<script>
    import {readableDateStore} from "./Store"

// function to format the date to a redable string
    const dateFormatter = new Intl.DateTimeFormat("en", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    })
</script>

<h2>The time is: {dateFormatter.format($readableDateStore)}</h2>