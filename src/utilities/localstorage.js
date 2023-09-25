function getDonation() {
    const donation = localStorage.getItem('donation')
    if (donation) {
        return JSON.parse(donation)
    }
    return []
}

function setDonation(id) {
    const prevDonation = getDonation()
    prevDonation.push(id)
    localStorage.setItem('donation', JSON.stringify(prevDonation))
}

export { getDonation, setDonation }
